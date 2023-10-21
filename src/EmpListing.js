import { useEffect, useState } from "react";
const EmpListing = () => {
    useEffect(() => {
        fetch("http://localhost:8002/alumno").then((res) => {
            return res.json();
        }).then((resp) => {
            console.log(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Ticket Turno</h2>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td className="bg-dark text-white">CURP</td>
                                <td className="bg-dark text-white">Nombre</td>
                                <td className="bg-dark text-white">Paterno</td>
                                <td className="bg-dark text-white">Materno</td>
                                <td className="bg-dark text-white">Action</td>

                            </tr>
                        </thead>
                        <tbody>


                        </tbody>


                    </table>
                </div>
            </div>
        </div>



    );
}

export default EmpListing;