function TableForm({products}) {
  return (
    <section className="flex justify-center text-center">
        <table className="w-full table-auto min-w-max">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">No.</th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Name</th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Price</th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Category</th>
            </tr>
          </thead>
          <tbody className="[&>*:nth-child(odd)]:bg-red-100 [&>*:nth-child(even)]:bg-blue-100">
            {
              products.map((row, index) => (
                <tr key={index}>
                  <td className="p-4">{index+1}</td>
                  <td className="p-4">{row.name}</td>
                  <td className="p-4">{row.price}</td>
                  <td className="p-4">{row.category}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </section>
  )
}

export default TableForm