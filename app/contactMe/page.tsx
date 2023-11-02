import ContactForm from '../components/ContactForm'


export default async function ContactMe(){
    return (
        <div className="divide-y mt-10 divide-gray-200 dark:divide-gray-700">
            <div id="all-projects" className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h3  className="text-3xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                    Contact Me
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