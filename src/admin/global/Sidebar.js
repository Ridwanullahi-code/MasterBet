import React, {useState} from 'react'
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { BookOpenIcon } from '@heroicons/react/24/solid'
import { DASHBOARD_SIDEBAR_LINKS} from '../lib/constant'
import { Link} from 'react-router-dom'

const linkClass ='flex items-center font-light py-2 hover:bg-black hover:no-underline active:bg-neutral-600 rounded-sm text-base'

const Sidebar = () => {
	const [open, setOpen] = useState(true);
	
    return (
		<div className={`${open ? "px-10" : "px-2"} p-5 pt-8 duration-300 flex flex-col text-white h-screen bg-black relative`}>
			<button className={`w-8 h-8 text-white cursor-pointer ${open && "rotate-180"}`}
            onClick={() => setOpen(!open)}>
             <ArrowLeftCircleIcon />
            </button>
			<div className='flex items-center gap-2 py-3'>
			<BookOpenIcon className="h-6 w-6 text-white" />
			<span className={`text-blue-400 text-lg ${open ? 'flex' :'hidden'}`}>Dashboard</span>
			</div>
			<div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<Link
						key={link.key}
						to={link.path}
						className={linkClass}>
						<span className="text-xl">{link.icon}</span>
						<span className={`${ open ? 'flex' : 'hidden' }`}>
							{link.label}
						</span>
				    </Link>
				))}
			</div>
		</div>
  )
}

export default Sidebar
