import React,{useState} from 'react'
import Edittask from './Edittask'
import db from './firebase'


export default function Card({taskobj,index, obj,updateListarray}) {


    const [modal, setModal] = useState(false)
    const colors = [
        {
          primaryColor: "#5D93E1",
          secondaryColor: "#ECF3FC"
        },
        {
          primaryColor: "#F9D288",
          secondaryColor: "#FEFAF1"
        },
        {
          primaryColor: "#5DC250",
          secondaryColor: "#F2FAF1"
        },
        {
          primaryColor: "#F48687",
          secondaryColor: "#FDF1F1"
        },
        {
          primaryColor: "#B964F7",
          secondaryColor: "#F3F0FD"
        }
      ]

      const toggle=()=>{
          setModal(!modal)
      }


    //   const update=(obj,index)=>{
    // //  console.log(obj)
    //     updateListarray(obj,index)
    //   }


      
    return (
        <div>

        <div className="card-wrapper me-3">
          <div className="card-top" style={{ "backgroundColor": colors[index % 5].primaryColor }}></div>
          <div className="task-holder">
            <span className="card-header px-2" style={{ "backgroundColor": colors[index % 5].secondaryColor, "borderRadius": "10px" }}> {taskobj.name} </span>
            <p className="mt-3"> { taskobj.desc}</p>

            <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>
              <i className="far fa-edit me-3" style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }}
               onClick={()=>{setModal(true)}} ></i>
              <i className="fas fa-trash-alt" style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }}
               onClick={event=>db.collection('tasklist').doc(obj.id).delete()} ></i>
            </div>
          </div>
          <Edittask modal={modal} toggle={toggle} obj={obj} taskobj={taskobj} />
        </div>
      </div>
    )
}
