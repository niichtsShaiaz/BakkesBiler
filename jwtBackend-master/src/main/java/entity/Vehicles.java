package entity;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

/**
 *
 * @author Jonas
 */
@Entity
public class Vehicles implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String category;
    private String picture; 
    private String make;
    private String model;
    private int year;
    private String regno;
    private int seats;
    private int doors;
    private String gearType;
    private boolean aircondition;
    private String location;
    private double pricePerDay;
    private boolean isavailable;
    @OneToMany(mappedBy = "vehicles")
    private List<Reservation> reservations;

    public Vehicles() {
    }


    public Vehicles(String category, String picture, String make, String model, int year, String regno, int seats, int doors, String gearType, boolean aircondition, String location, double pricePerDay, boolean isavailable, List<Reservation> reservations) {
        this.category = category;
        this.picture = picture;
        this.make = make;
        this.model = model;
        this.year = year;
        this.regno = regno;
        this.seats = seats;
        this.doors = doors;
        this.gearType = gearType;
        this.aircondition = aircondition;
        this.location = location;
        this.pricePerDay = pricePerDay;
        this.isavailable = isavailable;
        this.reservations = reservations;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }
    
    

    public Long getId() {
        return id;
    }

 

    public String getCategory() {
        return category;
    }

    

    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    public int getYear() {
        return year;
    }

    public String getRegno() {
        return regno;
    }

    public int getSeats() {
        return seats;
    }

    public int getDoors() {
        return doors;
    }

    public String getGearType() {
        return gearType;
    }

    public boolean isAircondition() {
        return aircondition;
    }

    public String getLocation() {
        return location;
    }

    public double getPricePerDay() {
        return pricePerDay;
    }

    public boolean isIsavailable() {
        return isavailable;
    }
    
    

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Vehicles)) {
            return false;
        }
        Vehicles other = (Vehicles) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Vehicles{" + "id=" + id + ", category=" + category + ", pricture=" + picture + ", make=" + make + ", model=" + model + ", year=" + year + ", regno=" + regno + ", seats=" + seats + ", doors=" + doors + ", gearType=" + gearType + ", aircondition=" + aircondition + ", location=" + location + ", pricePerDay=" + pricePerDay + ", isavailable=" + isavailable + '}';
    }

 
    
}