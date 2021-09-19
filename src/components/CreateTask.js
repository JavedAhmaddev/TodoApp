import React,{useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function CreateTask({modal,toggle,save,setModal}) {
    const [taskname, setTaskname] = useState('');
    const [desc, setDesc] = useState('');
    const handlesave=()=>{
        let taskobj={}
        taskobj["name"]=taskname
        
        taskobj["desc"]=desc
        save(taskobj)
        
        setModal(false)
        setTaskname("")
        setDesc("")

    }

    
    return (
        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
         <form>
         <div className="form-group">
         <label> Task Name</label>
         <input type="text" value={taskname} onChange={(event)=>{setTaskname(event.target.value)}} className="form-control"/>
         </div>
         <div className="form-group">
         <label> Description</label>
         <textarea rows="5" value={desc} onChange={(event)=>{setDesc(event.target.value)}} className="form-control"></textarea>
         </div>
         </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handlesave}>Save</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
}
