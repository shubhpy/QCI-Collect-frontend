import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProjectService} from '../../service/ProjectService';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formArray = [];
  templateArray = [];
  fArray : any;
  tArray : any;
  tID: any;
  aTemp: any;
  rnameArray = [];
  rcondition = ['equals','grater than', 'smaller than', 'not equals'];
  ruleElement: any;
  ruleCondition: any= 'equals';
  hint: any;
  target: any;
  ruleTempTail: any;
  ruleTarget: any;
  ruleID: any;
  ruleName: any;

  rulesArray: any=[];
  formCIDWithRule: any;

  constructor( private projectService: ProjectService, private router: Router ){
    this.fArray = this.projectService.emitFormArray.subscribe((res)=>{
      // console.log(res);
      this.formArray = res;
    });

    this.tArray = this.projectService.emitTemplateArray.subscribe((res)=>{
      // console.log(res);
      this.templateArray = res;
    });

  }

  new() {
    this.router.navigate(['dash/formBuilder']);
  }

  ngOnInit() {

    this.projectService.getFormArray();
    this.projectService.getTemplateArray();
  }

  ngOnDestroy() {

    this.fArray.unsubscribe();
    this.tArray.unsubscribe();
  }

  rule(data, cid, formElement) {

    this.rulesArray = data;
    this.formCIDWithRule = cid;
    this.rnameArray = formElement;
  }

  getVal() {
    // console.log(this.ruleElement);
    if(this.ruleElement.option) {
      this.hint = this.ruleElement.option.toString();
    }
    if(this.ruleElement.value) {
      this.hint = this.hint + "," +this.ruleElement.value;
    }
    // console.log(this.ruleCondition);
  }

  conformRule() {

    let tempCid = this.ruleTempTail.Details.cid;
    let tempName = this.ruleTempTail.Details.name;
    let now = new Date();
    let cid = now.getTime() +""+ Math.floor(1000 + Math.random() * 9000);
    let newRule = {cid:cid, name: this.ruleName, elementName: this.ruleElement.name,elementCid: this.ruleElement.cid, elementType: this.ruleElement.type, elementValue: this.ruleTarget.trim(), condition: this.ruleCondition, tempCid: tempCid};
    this.projectService.addNewRule(this.formCIDWithRule, newRule);

    // {name: 'Rule 1', elementName:'Name', elementType: "text", elementValue:"sam", template:1, tempCid: '2332', tempName: 'template1'},
  }

  sync() {
    this.projectService.syncAll();
  }

}
