import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { MyTheButtonComponent } from './the-button/the-button.component';
export class MyLibModule {
}
MyLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MyLibComponent, MyTheButtonComponent],
                imports: [],
                exports: [MyLibComponent, MyTheButtonComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYi9zcmMvbGliL215LWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFVdkUsTUFBTSxPQUFPLFdBQVc7OztZQU52QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsY0FBYyxFQUFFLG9CQUFvQixDQUFDO2dCQUNwRCxPQUFPLEVBQUUsRUFDUjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsb0JBQW9CLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTXlMaWJDb21wb25lbnQgfSBmcm9tICcuL215LWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHtNeVRoZUJ1dHRvbkNvbXBvbmVudH0gZnJvbSAnLi90aGUtYnV0dG9uL3RoZS1idXR0b24uY29tcG9uZW50JztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW015TGliQ29tcG9uZW50LCBNeVRoZUJ1dHRvbkNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZXhwb3J0czogW015TGliQ29tcG9uZW50LCBNeVRoZUJ1dHRvbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTXlMaWJNb2R1bGUgeyB9XG4iXX0=