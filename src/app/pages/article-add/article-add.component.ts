import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/services/article/article.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.scss']
})
export class ArticleAddComponent implements OnInit {

  constructor(private builder: FormBuilder, private articleServiceApi: ArticleService, private toastr: ToastrService,) { }

  ngOnInit(): void {}

  header = new FormControl('', [
    Validators.required,
  ]);

  content = new FormControl('', [
    Validators.required,
  ]);
 

  articleForm: FormGroup = this.builder.group({
    header: this.header,
    content: this.content,

  });

  articleService() {
    this.articleServiceApi.article(this.articleForm.value).subscribe((res: any) => {
      console.log(res);
      if(res.id){
        this.toastr.success('Kayıt başarılı!');
      }
      else{
        this.toastr.error('Kayıt başarısız!');
      }
    } , error => {
      this.toastr.error('Kayıt başarısız!');
    },)
  }


  article() {
    if(this.articleForm.valid){
      this.articleService();
    }
    
  }

}
