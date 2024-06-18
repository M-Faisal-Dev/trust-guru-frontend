import Link from "next/link"

const Anchor = (props) => {
  return (
    <Link href={props.link} className="hover:text-blackk ">{props.text}</Link>
  )
}

export default Anchor