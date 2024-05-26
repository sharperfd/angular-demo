import { Component } from '@angular/core';
import { QuestionService } from '@services/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  questionCategoryList: any;
  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    this.questionService.getQuestionCategoryList().subscribe(
      (res) => {
        console.log('Question Category List:', res);
        this.questionCategoryList = res.data;
      },
      (error) => {
        console.error('Error fetching question category list:', error);
      }
    );
  }

  goToCategoryDetail(id: string): void {
    // Assuming your category object has an id property
    console.log(id);
    this.router.navigate(['/category', id]);
  }
}
