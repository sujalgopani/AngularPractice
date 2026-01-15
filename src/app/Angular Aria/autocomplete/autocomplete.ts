import {Combobox, ComboboxInput, ComboboxPopupContainer} from '@angular/aria/combobox';
import {Listbox, Option} from '@angular/aria/listbox';
import {OverlayModule} from '@angular/cdk/overlay';
import {
  afterRenderEffect, // run after render angular page
  ChangeDetectionStrategy, // for the ChangeDetectionStrategy
  Component,
  computed,
  signal,
  viewChild,
  viewChildren,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-autocomplete',
  templateUrl: 'autocomplete.html',
  styleUrl: 'autocomplete.css',
  imports: [
    Combobox, // for the input
    ComboboxInput, // for the input
    ComboboxPopupContainer, // for the input
    Listbox, // for the dropdown option
    Option, // for the dropdown option
    OverlayModule, // for the over floating option
    FormsModule, // for the form handle
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Autocomplete {

  listbox = viewChild<Listbox<string>>(Listbox); // dropdown list reference

  options = viewChildren<Option<string>>(Option); // access the option of the dropdown

  combobox = viewChild<Combobox<string>>(Combobox); // main input + dropdown  reference

  query = signal(''); // user entered value consume in the signal

  // filter the country based on the user enter value or text
  countries = computed(() =>
    ALL_COUNTRIES.filter((country) => country.toLowerCase().startsWith(this.query().toLowerCase())),
  );

  constructor() {
     afterRenderEffect(() => {
      const option = this.options().find((opt) => opt.active()); // current highlighted option select
      setTimeout(() => option?.element.scrollIntoView({block: 'nearest'}), 50);
    });

    // Resets the listbox scroll position when the combobox is closed.
    afterRenderEffect(() => {
      if (!this.combobox()?.expanded()) {
        setTimeout(() => this.listbox()?.element.scrollTo(0, 0), 150);
      }
    });
  }

}
const ALL_COUNTRIES = ['India','China','Pakistan','Bhutan','Thailand','iran','ink','chikli','cha'];
