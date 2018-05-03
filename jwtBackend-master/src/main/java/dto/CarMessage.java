/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dto;

import entity.Reservation;
import entity.Vehicles;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Jbakke
 */
public class CarMessage implements JSONMessage<Vehicles>{

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
    private List<ReservationMessage> reservations;

    public CarMessage(Long id, String category, String picture, String make, String model, int year, String regno, int seats, int doors, String gearType, boolean aircondition, String location, double pricePerDay, boolean isavailable, List<ReservationMessage> reservations) {
        this.id = id;
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
    
    public CarMessage(Vehicles v) {
        this.id = v.getId();
        this.category = v.getCategory();
        this.picture = v.getPicture();
        this.make = v.getMake();
        this.model = v.getModel();
        this.year = v.getYear();
        this.regno = v.getRegno();
        this.seats = v.getSeats();
        this.doors = v.getDoors();
        this.gearType = v.getGearType();
        this.aircondition = v.isAircondition();
        this.location = v.getLocation();
        this.pricePerDay = v.getPricePerDay();
        this.isavailable = v.isIsavailable();
        this.reservations = new ArrayList<ReservationMessage>();
        for(Reservation reservation : v.getReservations())
        {
            this.reservations.add(new ReservationMessage(reservation));
        }
    }
    
    
    
    @Override
    public Vehicles toInternal() {
        List<Reservation> res = new ArrayList<Reservation>();
        for(ReservationMessage r : reservations)
        {
            res.add(r.toInternal());
        }
        Vehicles v = new Vehicles(category, picture, make, model, year, regno, seats, doors, gearType, aircondition, location, 0, isavailable, res);
        return v;
    }
    
}
