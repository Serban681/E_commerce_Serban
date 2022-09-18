import ClothCard from '../../Components/ClothCard';
import data from '../../../data';

export function RecommendedSection({currentItem})
{
    const curSectionItems = data.filter(el => el.section === currentItem.section && el.id != currentItem.id)
    
    return (
        <section className='pb-72'>
            <div className='mx-auto w-11/12 max-w-6xl lg:mt-5'>
                <h1 className='font-body font-medium text-primaryText text-4.5xl mb-2 mt-5'>Recommended</h1>
                <div className='bg-primaryText  h-1'/>
            </div>  

            <div className='flex justify-around flex-wrap  mt-5'>
                <ClothCard key={0} index={'0'} id={curSectionItems[0].id} price={curSectionItems[0].price} name={curSectionItems[0].name} image={curSectionItems[0].image}/>
                <ClothCard key={1} index={'1'} id={curSectionItems[1].id} price={curSectionItems[1].price} name={curSectionItems[1].name} image={curSectionItems[1].image}/>
                <ClothCard key={2} index={'2'} id={curSectionItems[2].id} price={curSectionItems[2].price} name={curSectionItems[2].name} image={curSectionItems[2].image}/>
            </div>
        </section>
    )
}