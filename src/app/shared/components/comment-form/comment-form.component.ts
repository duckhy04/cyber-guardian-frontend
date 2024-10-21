import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Modules } from '../../modules/ImportModules';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [Modules],
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']  // Đã sửa lại từ styleUrl thành styleUrls
})
export class CommentFormComponent {
  @ViewChild('fileInput') fileInput?: ElementRef; // Tham chiếu tới input file
  @Input() questionId!: number;
  @Output() commentFormPosted = new EventEmitter<{ questionId: number, text: string, imageFile?: File }>();

  commentForm!: FormGroup;
  selectedImageFile: File | null = null;

  constructor(private fb: FormBuilder) {
    // Thêm form control cho imageFile
    this.commentForm = this.fb.group({
      text: [null, Validators.required],
      imageFile: [null]  // Form control cho file input
    });
  }

  onSelectedFile(event: any) {
    this.selectedImageFile = event.target.files[0];
  }

  postCommentForm() {
    if (this.commentForm.valid || this.selectedImageFile) {
      this.commentFormPosted.emit({
        questionId: this.questionId,
        text: this.commentForm.get('text')?.value,
        imageFile: this.selectedImageFile || undefined
      });

      // Reset form và file input
      this.commentForm.reset();
      this.selectedImageFile = null;

      // Reset giá trị của file input (DOM)
      if (this.fileInput) {
        this.fileInput.nativeElement.value = '';  // Đặt lại trường input file
      }
    }
  }
}
