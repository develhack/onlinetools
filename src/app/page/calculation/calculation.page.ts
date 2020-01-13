import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import {
  CalculationService,
  CalculationResult,
  ExpressionError
} from '@service/calculation/calculation.service';
import { IonTextarea } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.page.html',
  styleUrls: ['./calculation.page.scss']
})
export class CalculationPage implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private calculationService: CalculationService
  ) {}

  formula = '';
  result: CalculationResult | null = null;
  error: Error | null = null;
  variousExpressions: {
    decimal: string;
    binary: string;
    hexadecimal: string;
    binaryLE: string;
    hexadecimalLE: string;
  } | null = null;

  @ViewChild(IonTextarea, { read: ElementRef, static: true })
  formulaTextareaRef: ElementRef;

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(queryParamMap => {
      this.formula = queryParamMap.get('formula');
      console.dir(this.formula);
      if (this.formula) this.calculate();
    });
  }

  calculate() {

    this.router.navigate([], { queryParams: { formula: this.formula } });

    this.result = null;
    this.error = null;
    this.variousExpressions = null;
    if (!this.formula) return;

    try {
      this.result = this.calculationService.calculate(this.formula);
      this.definePropertiesForUI(this.result.stack);
      this.showVariousExpressions(this.result.value);
    } catch (error) {
      this.error = error;
      if (error instanceof ExpressionError) {
        let offset = 0;
        for (let line = 1; line < error.line && this.formula.charAt(offset); ++offset) {
          switch (this.formula.charAt(offset)) {
            case '\r': if (this.formula.charAt(offset + 1) === '\n') break;
            /* falls through */
            case '\n': ++line;
          }
        }
        offset += error.column;
        const formulaTextarea: HTMLTextAreaElement = this.formulaTextareaRef.nativeElement.shadowRoot.querySelector('textarea');
        formulaTextarea.focus();
        formulaTextarea.setSelectionRange(offset, offset + 1);
      }
    }
  }

  showVariousExpressions(value: number) {

    const decimal = this.toStringArray(value.toString(10), 3, false);
    const binary =  this.toStringArray(value.toString(2), 8);
    const hexadecimal =  this.toStringArray(value.toString(16), 2);

    this.variousExpressions = {
      decimal: decimal.join(','),
      binary: binary.join(' '),
      hexadecimal: hexadecimal.join(' '),
      binaryLE: binary.reverse().join(' '),
      hexadecimalLE: hexadecimal.reverse().join(' '),
      };
  }

  private definePropertiesForUI(stack: any) {
    let open = false;
    Object.defineProperty(stack, 'open', {
      get: () => open && (!stack.parent || stack.parent.open),
      set: (value: boolean) => {
        open = value;
      }
    });
    stack.children.forEach(this.definePropertiesForUI.bind(this));
  }

  private toStringArray(value: string, unit: number, zeropad = true) {
    if (zeropad) {
      const fraction = value.length % unit;
      if (fraction) {
        value = '0'.repeat(unit - fraction) + value;
      }
    }
    const regexp = new RegExp(`(?=(?:.{${unit}})+$)`);
    return value.split(regexp);
  }
}
