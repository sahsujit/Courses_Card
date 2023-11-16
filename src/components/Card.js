// import { click } from '@testing-library/user-event/dist/click';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Card = (props) => {

    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Liked Removed");
        }
        else {
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else {
                setLikedCourses((prev) => [...prev, course.id]);

            }
            toast.success("Liked Successfully");
        }
    }


    const [readmore, setReadMore] = useState(false);
    const description = readmore ? props.course.description : `${props.course.description.substring(0, 100)}....`;

    function readmoreHandler() {
        setReadMore(!readmore);
    }

    let course = props.course;
    return (
        <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
            <div className='relative '>
                <img src={course.image.url} />
                <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                    likedCourses.includes(course.id) ?
                        (<FcLike fontSize="1.75rem" />) :
                        ( <FcLikePlaceholder fontSize="1.75rem"/> )
                   }
                    </button>
                </div>
            </div>

            <div className='p-4'>
                <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>
                    {description}
                    <span className="readMore cursor-pointer text-blue-600" onClick={readmoreHandler}>
                        {readmore ? `show less` : `read more`}
                    </span>
                </p>
            </div>
        </div>
    )
}
export default Card;