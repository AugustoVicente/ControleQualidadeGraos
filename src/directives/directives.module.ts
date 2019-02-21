import { NgModule } from '@angular/core';
import { KzMaskDirective } from './kz-mask/kz-mask';
import { UppercaseDirective } from './uppercase/uppercase';
@NgModule({
	declarations: [KzMaskDirective,
    UppercaseDirective],
	imports: [],
	exports: [KzMaskDirective,
    UppercaseDirective]
})
export class DirectivesModule {}
