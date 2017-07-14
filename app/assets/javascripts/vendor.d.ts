// Internal globals
declare var ClipperLib: any;
declare var Visibility: any;
declare var earcut: any;
declare var gapi: any;
declare var google: any;
declare var _: any;

declare var Transform: any;

declare interface FileReaderEventTarget extends EventTarget {
    result:string
}

declare interface FileReaderEvent extends Event {
    target: FileReaderEventTarget;
    getMessage():string;
}

declare interface JQuery {
     spectrum: any;
}
