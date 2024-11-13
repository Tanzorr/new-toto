import {Injectable} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "../../components/libs/modal/modal.component";


export interface ModalData {
  title: string;
  body: string;
  footer?: string;
  confirmButtonText: string;
  confirmButtonClass: string;
  cancelButtonText: string;
  cancelButtonClass: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) {
  }

  openModal(data: ModalData) {
    const modalRef = this.modalService.open(ModalComponent, {centered: true });
    modalRef.componentInstance.data = data;
    const {result} = modalRef;

    return result;
  }
}
