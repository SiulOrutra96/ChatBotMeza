//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//
import {ChangeDetectorRef, Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {CommonModule} from '@angular/common';
//
// ────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: F I L E S U P L O A D E R   C L A S S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────
//
/**
 * Class of component to handle the input file objects.
 *
 * @export
 * @class FilesUploader
 */
@Component({
    selector: 'files-uploader',
    templateUrl: 'files-uploader.html',
    styleUrls: ['files-uploader.scss']
})
export class FilesUploader {
    //
    // ─── INPUT VARIABLES ────────────────────────────────────────────────────────────
    //
    /**
     * Files array to iterate.
     *
     * @type {Object[]}
     * @memberof FilesUploader
     */
    @Input() files: Object[];
    /**
     * Files array limit number.
     *
     * @type {number}
     * @memberof FilesUploader
     */
    @Input() limit: number = 1;
    /**
     * message down of the camara icon.
     *
     * @type {string}
     * @memberof FilesUploader
     */
    @Input() message;
    /**
     */
    @Input() avatar;
    /**/
    @Input() user
    /*
    *
    */
    // ─── OUTPUT VARIABLES ────────────────────────────────────────────────────────────
    @Output() imageData = new EventEmitter<{id?: number, fileName?: string, url?: any, contentType?: string, _destroy?: boolean}>();
    @Output() fileData = new EventEmitter<{type: string, d: any, extention: string}>();
    //
    // ─── VARIABLES ──────────────────────────────────────────────────────────────────
    //
    classFile = 'inputWrapper';
    container = 'img-container';

    /**
     * Max size supported to load files.
     * 
     * @memberof FilesUploader
     */
    maxSize = 2.5; // mb
    /**
     * Supported format files.
     * 
     * @type {string}
     * @memberof FilesUploader
     */
    fileFormats: string = ".doc,.docx,.txt,.csv,.xls,.xlsx,.pdf";
    /**
     * Suported image files
     * 
     * @type {string}
     * @memberof FilesUploader
     */
    imageFormats: string = ".jpg,.png,.jpeg";
    /**
     * Supported formats merged.
     * 
     * @type {string}
     * @memberof FilesUploader
     */
    formats: string = "";
    /**
     * Regular expression to extract extension string from file name.
     * 
     * @memberof FilesUploader
     */
    reg = new RegExp("\.[a-z]*$");

    removeButtonView:boolean;

    constructor(
        private snackBar: MatSnackBarModule,
        private cdr: ChangeDetectorRef
    ) {
        this.formats = this.fileFormats + ',' + this.imageFormats;
    }
    //
    // ─── METHODS ────────────────────────────────────────────────────────────────────
    //
    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.defineClass();
        if(this.user==undefined){
            this.user=true;
        }
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnChanges() {
        if (this.message === '') {
        //    this.removeFile(this.files);
        }
      }

    defineClass() {
        if (this.message) {
            this.classFile = 'inputWrapper';
            this.container = 'img-container';
        } else {
            this.classFile = 'inputAvatar';
            this.container = 'img-container2';
        }
    }
    /**
     * Removes the selected file from file array.
     * 
     * @param {any} file File to be removed.
     * @memberof FilesUploader
     */
    removeFile(file): void {
        this.files.splice(this.files.indexOf(file), 1);
        this.cdr.detectChanges();
        this.imageData.emit({id: file.id, fileName: file.name, url: null, _destroy: true});
    }

    /**
     * Adds file from input file event to file array.
     * 
     * @param {any} event Event container of new file elements.
     * @memberof FilesUploader
     */
    addFiles(event) {
        const files = (event.target || event.srcElement).files;
        if (files) {
            for (var i = 0; i < files.length && this.files.length + i < this.limit; i++) {
                this.loadFile(files[i]);
            }
        }
    }

    /**
     * Reads a file element to base64 and adds the result to the file array.
     * 
     * @param {any} file Object type File to be readed.
     * @memberof FilesUploader
     */
    loadFile(file) {
        if (file.size < this.maxSize * 1000000) {
            let type: string = file.name;
            type = this.reg.exec(type)[0];
            if (this.formats.indexOf(type) != -1) {
                var fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = (e) => {
                    this.files.push({
                        url: fileReader.result,
                        name: file.name,
                        extention: type,
                        isImage: this.imageFormats.indexOf(type) >= 0
                    });
                    this.cdr.detectChanges();
                    this.avatar = fileReader.result;

                    if (type === '.png' || type === '.jpg' || type === '.gif' || type === '.bmp') {
                        this.ImageResize(fileReader.result).then((response) => {
                            this.imageData.emit({id: file.id, fileName: file.name, url: response, contentType: '.png'});
                            this.fileData.emit({type: 'image/png', d: response, extention: '.png'});
                        }).catch((error) => { console.log(error); });
                    } else {
                        this.fileData.emit({type: file.type, d: fileReader.result, extention: type});
                    }
                };
            } else {
                /*this.snackBar.open("This file format is not allowed", "", {
                    duration: 1000
                })*/
            }
        } else {
            /*
            this.snackBar.open("Maximum size is " + this.maxSize + "MB", "", {
                duration: 1000
            })*/
        }
    }

    ImageResize(url): Promise<any> {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = url;
        img.onload = function () {
            const canvas: any = document.createElement('CANVAS');
            const MAX_WIDTH = 600; // 600; 800 700
            const MAX_HEIGHT = 450; // 450; 600 525
            let width = img.width;
            let height = img.height;
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const dataurl = canvas.toDataURL('image/png');

            resolve(dataurl);
            reject('Error to get Users Data');
        };
     });
    }
}
