import { Component } from '@angular/core'

import { Student } from './student/student.model'

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jad'

  students: Student[] = [
          { name: 'Luke Skywalker', isJedi: true, temple: 'Coruscant' },
          { name: 'Han Sola', isJedi: false },
          { name: 'Princesa Leia', isJedi: false }
      ]
}
