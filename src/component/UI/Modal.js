import { Fragment } from 'react';
import classes from'./Modal.module.css';
import ReactDOM  from 'react-dom';
const Backdrop=(props)=>{
    return(<div className={classes.backdrop} onClick={props.onClose}/>)
    }
    const ModalOverlays=(props)=>{
        return(<div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>)
        }
        const PortalElement=document.getElementById('overlays');
const Modal=(props)=>{

return(
    <Fragment>
       {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,PortalElement)}
       {ReactDOM.createPortal( <ModalOverlays>{props.children}</ModalOverlays>,PortalElement)};
    </Fragment>
)
}
export default Modal;