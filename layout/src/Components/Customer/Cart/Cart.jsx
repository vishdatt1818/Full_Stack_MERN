export default function Cart(){
    return(
        <>
        <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Unit</th>
            <th scope="col">Rs.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>apple</td>
            <td>2</td>
            <td>200</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mango</td>
            <td>3</td>
            <td>200</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Orange</td>
            <td>4</td>
            <td>500</td>
          </tr>
        </tbody>
      </table>
        </>
    )
}