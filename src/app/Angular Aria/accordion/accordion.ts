import { Component } from '@angular/core';
import {
  AccordionGroup,
  AccordionTrigger,
  AccordionPanel,
  AccordionContent,
} from '@angular/aria/accordion';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-accordion',
  imports: [AccordionGroup, AccordionTrigger, AccordionPanel, AccordionContent, FormsModule],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css',
})

export class Accordion {}
