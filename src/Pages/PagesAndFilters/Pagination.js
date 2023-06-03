export default function Pagination({ totalPost, postPerPage,setCurrentPage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pageNav">
      {pages.map((page, index) => (
        <button onClick={()=>setCurrentPage(page)} key={index}>{page}</button>
      ))}
    </div>
  );
}
