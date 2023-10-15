import styles from './BlogPage.module.css'
import Date from "@/components/date";
import { getPostData } from "@/lib/getPosts";

async function getDataThing(params){
  const postData = await getPostData(params);
  return postData

}

export async function generateMetadata({ params }) {
  const postData = await getDataThing(params.id);

  return {
    title: postData.title,
    description: postData.description,
  };
}

export default async function Post(params) {  
  const postData = await getDataThing(params.params.id);

  return (
    <div className={styles.page}>
      <h1>{postData.title}</h1>
      <Date dateString={postData.date} />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}