import Blog from "@/components/Blog"
import Skill from "@/components/Skill"
import Navbar from "@/components/Navbar"
import Blogbody from "@/components/Blogbody"
import Blogcontent from "@/components/Blogcontent"
import Frequent from "@/components/Frequent"
import Blogaccordian from "@/components/Blogaccordian"
import BlogFooter from "@/components/BlogFooter"
import Form from "@/components/Form"
export default function Home() {
  return (
    <>
      <Blog />
      <Skill />
      <Navbar />
      <Blogbody />
      <Blogcontent />
      <Frequent />
      <Form />
      <Blogaccordian />
      <BlogFooter />
    </>
  )
}
