enum formatedMonth {
    Jan = 1,
    Feb = 2,
    Mar = 3,
    Apr = 4,
    May = 5,
    Jun = 6,
    Jul = 7,
    Aug = 8,
    Sep = 9,
    Oct = 10,
    Nov = 11,
    Dec = 12,
}

export const formateDate = (date:string): string =>{
    const dateInList = date.split('/');

    return `${formatedMonth[parseInt(dateInList[0])]} ${parseInt(dateInList[1])}, ${dateInList[2]}`;
}