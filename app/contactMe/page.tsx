import ContactForm from '../components/ContactForm'


export default async function ContactMe(){
    return (
        <div id="contact" className=" divide-y mt-10 divide-gray-200 dark:divide-gray-700">
            <div id="all-projects" className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h3  className="text-3xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                    Contact Me
                    <div className='relative float-right border-gray-50 '>
                        <a 
                            className='flex items-center m-2'
                            href='https://www.dropbox.com/scl/fi/j6dujhmix2wwb78rk4pho/Lucas-Richards-SE-Resume.docx?dl=1'>
                            <p className='prose max-w-none mr-2 prose-lg dark:prose-invert xl:col-span-2'>Resume</p>
                        
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='w-6 h-6 text-mainColor opacity-100 hover:opacity-75'>
                            <path d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                            </svg>

                            


                        </a>
                    </div>
                </h3>
            </div>
            <div className="w-full">
                <div className="max-w-[500px] mx-auto mt-8">
                    <ContactForm />
                </div>

            </div>

        </div>
    )
}