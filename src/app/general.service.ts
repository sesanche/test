import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GeneralService {
    private subject = new Subject<any>();
    private subjectbreed = new Subject<any>();


    sendMessage(message: string) {
        this.subject.next({ text: message });
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    sendMessageBreed(message: string) {
        this.subjectbreed.next({ text: message });
    }

    clearMessageBreed() {
        this.subjectbreed.next();
    }

    getMessageBreed(): Observable<any> {
        return this.subjectbreed.asObservable();
    }




}