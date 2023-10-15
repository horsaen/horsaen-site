import Link from 'next/link';
import styles from './Blog.module.css'
import Date from '@/components/date';

import { getSortedPostsData } from '@/lib/getPosts'

export default function Blog() {
  const allPostsData = getSortedPostsData();
  return (
    <div className={styles.blog}>
      <span className={styles.title}>{`cameron's blog`}</span>
      {/* do this later,,, client/server thing :| */}
      {/* <input type="text" placeholder="search" /> */}
      <div className={styles.blogList}>
        {allPostsData.map(({ id, date, title }) => (
          <div key={id} className={styles.blogItem}>
            <Link href={`/blog/${id}`}>
              {title}
            </Link>
            <Date dateString={date} />
          </div>
        ))}
      </div>
    </div>
  )
}