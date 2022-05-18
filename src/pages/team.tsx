import dynamic from 'next/dynamic';
import {  AnimateSharedLayout, motion} from 'framer-motion'
import { useState } from 'react';

import { slideInDown, slideInUp } from '@helpers/animations';
import globalStyles from '@styles/team.styles';
import Author, { getAuthor, getAuthorsList, Role } from '@classes/Author';
import WEBSITE_INFO from '@helpers/webSiteInfo';
import HeadTag from '@components/HeadTag';

const FilterTeammates = dynamic(() => import('@components/FilterTeammates'));
import TeammateCard from '@components/TeammateCard';
import AnimatedLayout from '@components/AnimatedLayout';

interface authorsList{
    allTeammates: Author[]
}

const animation ={
    initial: {scale: 0},
    animate: {scale: 1},
    exit: {scale: 0},
}


const TeamPage = ({allTeammates}: authorsList) => {
    const [filteredTeammates, setFilteredTeammates] = useState(allTeammates);
    const [activeRoleFilter, setActiveRoleFilter] = useState(Role.Everyone);
    return(
        <AnimatedLayout>
            <style jsx global>
                {globalStyles}
            </style>
            <HeadTag 
              image={WEBSITE_INFO.LOGO_PATH}
              title={`${WEBSITE_INFO.NAME} - Team`} 
              description={`${WEBSITE_INFO.NAME} Team page - Read about our teammates`}
              keywords={['home page']} 
              date={new Date()} 
              url="/team"
            />
            <div className='page'>
                <motion.div className='teammates-filters' variants={slideInDown}>
                    <FilterTeammates 
                        allTeammates={allTeammates}
                        setFilteredTeammates={setFilteredTeammates} 
                        activeRoleFilter={Role[activeRoleFilter]} 
                        setActiveRoleFilter={setActiveRoleFilter}
                    />
                </motion.div>
                <motion.div className='teammate-cards-grid'  variants={slideInUp}>
                    <AnimateSharedLayout>
                        {
                            filteredTeammates.map((teammate: Author, index: number) =>{
                                return  <TeammateCard author={teammate} key={index}/>
                            })
                        }
                    </AnimateSharedLayout>
                </motion.div>
            </div>
        </AnimatedLayout>
    );
}

export async function getStaticProps(){
    const authorsList = getAuthorsList()
    var allTeammates: Author[] = authorsList.map(authorKey => {
        return getAuthor(authorKey[0]);
    });

    return {
      props: {allTeammates}
    };
}

export default TeamPage;