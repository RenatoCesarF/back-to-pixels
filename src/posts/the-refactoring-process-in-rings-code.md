---
title: 'The Refactoring process in Rings code'
date: '07/07/2022'
author: 'renato'
cover_image: 'cover'
excerpt: "Presenting the Rings project and talking about some refatorations that I did"
categories: [RINGS, ARCHITECTURE, PROGRAMMING, PYTHON]
code_theme: 'dracula'
---

Hi There! I would like to introduce to you one of my (and Back to Pixels's) project **Rings**. And perhaps show some big refatorations that I did some days ago.

# Presenting Rings
Rings is a pygame video-game project that initialy was inspired by [Enter the Gungeon](https://enterthegungeon.com) and [Nuclear Throne](https://nuclearthrone.com) (even the sprite animation test was done usinig it's sprites). But with the time (and some studies) I realized that this scope was too big for my first game, and by the time I was preaty into [Vampire Survivors](https://store.steampowered.com/app/1794680/Vampire_Survivors/), so I decided to redirect Rings to be a "stand-still" rogue-like game. Aiming to try some video-game software architecture and push to the limits that python can do as a game development language!

> The name rings was refering to the upgrades in the game, that would be rings that you could use, maximum of 10.

But a compleete game still a big scope for someone that studies and have a full time job. So, my current idea is to develop each feature of a simple game development framework just to experiment with some module architectures.

And here today I will show you what was *Rings* before and after some cool structural changes that I made based on some simple things that I'v learned recently.

# How It Was and Where Its Going
Since I'm just developing feature to feature, my architecture thing was not that importante, so I keept the code struct as the simple pygame tutorial would give you, that is, extrimily bad, but with the simple *check-events*, *update entities*, *render entities* order.  

But after seen some [DaFluffyPotato](https://www.youtube.com/c/DaFluffyPotato) livestreams I start to recognize a patter in his code. He put everything into a *Game* class, and pass this game class to everyone inside it (this part is preaty danger, but ok), and inside this class he have a *world*  atrubute (of the class World) and a *Input* atribut (of the class Input) and so on for every major thing in his game. He also had some classic structs such as a list of *entities* and a list of projectile.

Anyways, this architecture can help a lot such in debugging (because um can tear apart things easilly) and in modularity.

So that's where I aimed to when refactoring Rings for (almos) the firt time.

# Some Bad Code
Here I will show you how the code was (its a little bit long, so maybe I will change it in the future)

```python
configs = json.load(open('config.json'))

pygame.init()
pygame.mixer.pre_init(44100, -16, 2, 512)
pygame.mixer.set_num_channels(32)
pygame.display.set_caption("Rings")
pygame.mouse.set_visible(False)

FONT = pygame.font.Font("res/Pixellari.ttf", 22)

global debugging
game_time = 0
base_screen_size = configs['resolution']
screen = pygame.display.set_mode(
	(base_screen_size[0],base_screen_size[1]),0,32
)
display = pygame.Surface((300,200))
clock = pygame.time.Clock()
screen_real_size = display.get_size()
camera = Vector(0,0)

player = Player(Vector(10,10))
player.load_animations()

TILE_SIZE = 20

game_map = [...]

cursor_img = pygame.transform.scale(
	pygame.image.load('res/mouse.png').convert(), (44, 44)
)

cursor_img.set_colorkey((255, 0, 0))

camera_speed = 20
debugging = True
running = True

while running:

	for event in pygame.event.get():
		check_events(event,player)

	mx, my = pygame.mouse.get_pos()

	true_mx = mx
	true_my = my

	mx -= (screen.get_width() - base_screen_size[0]) // 3
	my -= (screen.get_height() - base_screen_size[1]) // 3
	mx /= base_screen_size[0] / display.get_width()
	my /= base_screen_size[1] / display.get_height()

	camera.x = player.position.x + 7 - screen_real_size[0] /2 # the +7 is half of the size of the player, to certralyze
	camera.y = player.position.y + 7 - screen_real_size[1] /2

	player.is_not_walking = not player.is_moving_right and not 		player.is_moving_up and not player.is_moving_down and not player.is_moving_left


	scroll = camera
	scroll.x = int(scroll.x)
	scroll.y = int(scroll.y)

	display.fill((30,30,30))

	collision_tiles = []
	tile_rects =[]

	y = 0

	for row in game_map:

	x= 0

	for tile in row:
		#<big tiles logic and draw>
		for t in row:
			#<more logic and draw world stuff>
			
	player.update(mx, collision_tiles,camera)
	player.draw(display,debugging)

	screen.blit(pygame.transform.scale(display, base_screen_size),

	((screen.get_width() - base_screen_size[0]) // 2,

	(screen.get_height() - base_screen_size[1]) // 2))

	screen.blit(cursor_img, (true_mx // 3 * 3 + 1, true_my // 3 * 3 + 1))

	if debugging:

		utils.draw_text(FONT, "FPS: " + str(int(clock.get_fps())), screen, (10,10))

	pygame.display.update()
	clock.tick(60)
```

> I removed some unecessary parts

## Some less-bad code
```python
class Game:
	_entities: list
	game_time: int
	player: Player
	window: Window
	world: World
	mouse: Mouse
	camera: Camera
	
	def __init__(self):
		configs = json.load(open("config.json"))
		self.window = Window(configs)
		self.mouse = Mouse(self.window)
		self.world = World()
		self.player = Player(self)
		self.player.load_animations()
		self.camera = Camera(
				self.player, 
				self.window.screen_real_size
		)
	
	
		self._entities = []
		self._entities.append(self.player)
		self.running = True
		self.clock = pygame.time.Clock()
		self.FONT = pygame.font.Font("res/Pixellari.ttf", 22)
	
	
	def update(self):
		self.world.update()
		self.mouse.update()
		self.camera.update()
		for entitiy in self._entities:
			entitiy.update()
	
		pygame.display.update()
		self.clock.tick(60)
		
	def draw(self):
		self.window.display.fill((30, 30, 30))
		self.world.draw(self.window.display, self.camera.position)
		
		for entitiy in self._entities:
			entitiy.draw(self.window.display, self.camera.position)
			
	
		self.window.blit_displays()
		self.mouse.draw(self.window.screen)
		
	def run(self):
		while self.running:
			self.check_events()
			self.update()
			self.draw()
			
game = Game().run()
```

Even with this "better" code, there are always things to improve everywhere. Such as an Input class to handle all the input commands and logic (that I hidded in this example), or some particles and sound managers (that i didn't implemented yet).

As Uncle Bob says in "Clean Architecture":

> Good (clean and well architectured) code, should look like well writen poem

The new rings architecture looks like some Ok poem, but I actually think it could be better, mainlly in the *Player* class (the animation system is kind messed up). In the end, all I did was to hide things properly and realocate then where they should be.

All the world logic and draw are inside the *World* class, for example, and the same things applies to all the other pieces of the game. It's clear that I don't have much to organize, but it was a good start point to do all this refatoration.


# What Rings has until now?
Rings started as an experiment, just me trying to implement some cool game-development features. So, the porject doesn't have much, just some split, bad implemented simple features, like particles, animations, colisions and sparks (that i just copied from DaFlufy). But those simple things that I have will be re-writed and documented here in the future. 

For now, the game looks something like this:

![game-screen-shot](game-screen-shot.webp)

> I used the Nuclear Throne animation to test some stuff ;)


# Conclusion

As I said, Rings is only in the start, and I pretend to turn it into a simple rogue-like game, and that's is some of the things I will bring here to the game-studio blog. 

I will bring some cool implementations and mainlly focoused in game-design architecture.

Hope you like and Thanks for reading! You can follow all **Rings** articles in [tag/rings](/blog/tag/rings)

You can checkout this project on my [RenatoCesraF/Rings](https://github.com/RenatoCesarF/Rings)