package mythik.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("Admin")
public class Admin extends Compte {

	public Admin() {
		super();
		
	}

	
	
}
