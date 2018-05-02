package utils;

import entity.Reservation;
import entity.Vehicles;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Persistence;


public class SetupTestUsers {
  
  public static void main(String[] args) {
    
    EntityManager em = Persistence.createEntityManagerFactory("persistence").createEntityManager();
    
          em.getTransaction().begin();
          List<Reservation> reservations = new ArrayList<Reservation>();
          reservations.add(new Reservation("Bakkes Biler", "jonatanatbakke.net", "02/05/2018", "03/06/2018"));
          
          Vehicles vehicles = new Vehicles("mini", "https://avisassets.abgemea.com/.imaging/vehicleDetails_large/dms/avis/fleet/Opel/Corsa/opel_15corsaenjoy5hb5b_sideview.png", "Opel", "Corsa", 2018, "ADV 2020", 5, 5, "manual", true, "CPH airport", 10.50, true);
          for(Reservation r : reservations)
          {
              r.setVehicles(vehicles);
              em.persist(r);
          }
          em.persist(vehicles);
          em.getTransaction().commit();
          System.out.println("model" + vehicles.getModel());
          
  }
        
}
