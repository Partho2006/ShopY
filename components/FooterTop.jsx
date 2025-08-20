import React from 'react'
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const data = [
    {
        title: "Visit Us",
        subtitle: "West Bengal, India",
        icon: (
            <MapPin className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
        ),
    },
    {
        title: "Call Us",
        subtitle: "+12 958 648 597",
        icon: (
            <Phone className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
        ),
    },
    {
        title: "Working Hours",
        subtitle: "Mon - Sat: 9:00 AM - 5:00 PM",
        icon: (
            <Clock className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
        ),
    },
    {
        title: "Email Us",
        subtitle: "parthojotyroychowdhury@gmail.com",
        icon: (
            <Mail className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
        ),
    },
];

const FooterTop = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 p-4 my-4  transition-colors border-t border-black/20'>
            {data.map((item, index) => (
                <div key={index} className="flex group hover:bg-violet-400 p-3 items-center space-x-2 rounded-xl transition-all duration-300">
                    <div>
                        {item.icon}
                    </div>
                    <div>
                        <h3 className='font-bold '>{item.title}</h3>
                        <p className='group-hover:text-black text-lightColor break-all'>{item.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FooterTop
