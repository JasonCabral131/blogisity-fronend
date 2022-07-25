import React , {useState, useRef, useCallback} from 'react'
import useFetching from "./../../config/fetchingBlog";
import UserContainerinfo from './UserContainerinfo';
const Writer = ({setHide, size, hide}) => {
  const [page, setPages] = useState(0)
   const {blog, loading, hasMore} = useFetching(page, `/messenges/writer/list-writer?page=${page}`);
   const triggerRef = useCallback(node => {}, []); 
  return (
    <div className='w-100 d-flex justify-content-start align-items-start flex-column messagae-inbox-content'>
        {
          blog.map((writer, index) => {
            if(index === blog.length){
              return <div className='w-100' ref={triggerRef}><UserContainerinfo data={writer} size={size} hide={hide} setHide={setHide}/></div>
            }
            return <div className='w-100'><UserContainerinfo  data={writer} size={size} hide={hide} setHide={setHide}/></div>
          })
        }
        {
          loading && <div className='w-100 text-center mt-1'>loading...</div>
        }
    </div>
  )
}

export default Writer