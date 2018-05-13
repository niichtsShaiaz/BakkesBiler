package utils;

import entity.Reservation;
import entity.Role;
import entity.User;
import entity.Vehicles;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Persistence;
//import org.mindrot.jbcrypt.BCrypt;


public class SetupTestUsers {
  
  public static void main(String[] args) {
    
    EntityManager em = Persistence.createEntityManagerFactory("persistence").createEntityManager();
//     em.getTransaction().begin();
//          Role userRole = new Role("user");
//          Role adminRole = new Role("admin");
//          User user = new User("user", BCrypt.hashpw("test", "$2a$15$.m2mB5HEeJtdkHBAnksUku"));
//          user.addRole(userRole);
//          User admin = new User("admin", BCrypt.hashpw("test", "$2a$15$.m2mB5HEeJtdkHBAnksUku"));
//          admin.addRole(adminRole);
//          User both = new User("user_admin", BCrypt.hashpw("test", "$2a$15$.m2mB5HEeJtdkHBAnksUku"));
//          both.addRole(userRole);
//          both.addRole(adminRole);
//          em.persist(userRole);
//          em.persist(adminRole);
//          em.persist(user);
//          em.persist(admin);
//          em.persist(both);
//          em.getTransaction().commit();
//          System.out.println("PW: "+user.getUserPass());
//          System.out.println("Testing user with OK password: "+user.verifyPassword("test"));
//          System.out.println("Testing user with wrong password: "+user.verifyPassword("test1"));
//<<<<<<< HEAD
//          System.out.println("Created TEST Users");
    
    
          
//=======
          System.out.println("Created TEST Users");
    
           em.getTransaction().begin();
          List<Reservation> reservations = new ArrayList<Reservation>();
          reservations.add(new Reservation("Bakkes Biler", "jonatanatbakke.net", "02/05/2018", "03/06/2018"));
          
          Vehicles vehicles = new Vehicles("mini", "https://avisassets.abgemea.com/.imaging/vehicleDetails_large/dms/avis/fleet/Opel/Corsa/opel_15corsaenjoy5hb5b_sideview.png", "Opel", "Corsa", 2018, "ADV 2020", 5, 5, "manual", true, "CPH airport", 10.50, true, reservations);
          for(Reservation r : reservations)
          {
              r.setVehicles(vehicles);
              em.persist(r);
          }
          em.persist(vehicles);
          em.getTransaction().commit();
          System.out.println("model" + vehicles.getModel());
//>>>>>>> origin/dev1
          


//          
//                               em.getTransaction().begin();
//          
//          Vehicles vehicles5 = new Vehicles("estate", "https://avisassets.abgemea.com/.imaging/vehicleDetails_large/dms/avis/fleet/Ford/Focus/ford_12focus5doorhatchback_3b_sideview.png", "Ford", "Focus SW", 2017, "ADV 1013", 5, 5, "manual", true, "CPH airport", 11.75, true);
//          em.persist(vehicles5);
//          em.getTransaction().commit();
//          System.out.println("model" + vehicles5.getModel());
//          
//            em.getTransaction().begin();
//          
//          Vehicles vehicles6 = new Vehicles("medium", "https://avisassets.abgemea.com/.imaging/vehicleDetails_large/dms/avis/fleet/Renault/Kangoo/renault_13kangooexpressmaximp_2b_sideview.png", "Renault", "Kangoo", 2017, "ADV 1213", 2, 2, "manual", true, "CPH airport", 08.75, true);
//          em.persist(vehicles6);
//          em.getTransaction().commit();
//          System.out.println("model" + vehicles6.getModel());
  }
        
}
