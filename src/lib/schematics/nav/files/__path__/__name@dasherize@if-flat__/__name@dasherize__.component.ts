import { Component<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: '<%= selector %>',<% if(inlineTemplate) { %>
  template: `
<%= resolvedFiles.template %>
  `,<% } else { %>
  templateUrl: './<%= dasherize(name) %>.component.html',<% } if(inlineStyle) { %>
  styles: [
    `
<%= resolvedFiles.stylesheet %>
    `
  ],<% } else { %>
  styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>'],<% } %><% if(!!viewEncapsulation) { %>
  encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection !== 'Default') { %>,
  changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>
})
export class <%= classify(name) %>Component {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver) {}
  
  }
