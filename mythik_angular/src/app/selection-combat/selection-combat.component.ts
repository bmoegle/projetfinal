import { Component } from '@angular/core';
import { CreatureService } from '../creature/creature.service';
import { Combattant, Creature} from '../model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CombattantService } from './combattant.service';

@Component({
  selector: 'app-selection-combat',
  templateUrl: './selection-combat.component.html',
  styleUrls: ['./selection-combat.component.css']
})
export class SelectionCombatComponent {

  creatures$!: Observable<Creature[]>;
  creatures?: Creature[]; 
  ready: boolean = false;
  
  combattant1!: Combattant; 
  combattant2!: Combattant; 

  constructor(private creatureService: CreatureService, private router: Router, private authService: AuthService, private combattantService: CombattantService){
    this.load(); 
    this.combattant1 = new Combattant(); 
  }

  load() {
    this.creatures$ = this.creatureService.findAll();
    this.creatures$.subscribe(resp => {this.creatures=resp})
    
  }

  list() {
    return this.creatures$;
  }

  creationCombattant1(creature : Creature){

    
    
    this.combattant1.compte = this.authService.getCompte();
    
      this.combattant1.creature = creature;
    
      
    console.log(this.combattant1);
      this.combattantService.save(this.combattant1).subscribe(resp => {this.combattant1}); 

  }

  creationCombattant2(){
    
    let nb = Math.floor(Math.random() * (this.creatures!.length +1))
    this.combattant2!.creature = this.creatures![nb];
    
    


  }

  goCombat(){
    //this.creationCombattant2(); 
    this.router.navigate(['/combat']);
    this.ready = true; 
   
  }

}
