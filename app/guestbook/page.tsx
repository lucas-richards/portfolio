import Form from '../components/Form'
import prisma from '../db'

async function getEntries(){
    const data = await prisma.guestbook.findMany({
        take:50,
        orderBy:{
            created_at:"desc"
        }
    })
    return data
}

// clear cache every 60 s
export const revalidate = 60

export default async function Guestbook(){
    const data = await getEntries()
    return (
        <div className="divide-y mt-10 divide-gray-200 dark:divide-gray-700">
            <div id="all-projects" className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h3  className="text-3xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                    Contact Me
                </h3>
            </div>
            <div className="w-full">
                <div className="max-w-[500px] mx-auto mt-8">
                    
                    <Form />

                    <div className='flex flex-col space-y-2 m-2'>
                        {data.map(entry=>(
                            <div key={entry.id} className='w-full text-sm break-words'>
                                {entry.message}
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}