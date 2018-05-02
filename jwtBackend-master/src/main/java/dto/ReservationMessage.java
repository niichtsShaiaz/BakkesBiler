/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dto;

import entity.Reservation;
import entity.Vehicles;

/**
 *
 * @author Jbakke
 */
public class ReservationMessage implements JSONMessage<Reservation>{

    private Long id;
    private String companyTag;
    private String customerMail;
    private String fromDate;
    private String toDate;
    private long vId;

    public ReservationMessage(Long id, String companyTag, String customerMail, String fromDate, String toDate) {
        this.id = id;
        this.companyTag = companyTag;
        this.customerMail = customerMail;
        this.fromDate = fromDate;
        this.toDate = toDate;
    }
    public ReservationMessage(Reservation r) {
        this.id = r.getId();
        this.companyTag = r.getCompanyTag();
        this.customerMail = r.getCustomerMail();
        this.fromDate = r.getFromDate();
        this.toDate = r.getToDate();
        this.vId = r.getVehicles().getId();
    }
    

    @Override
    public Reservation toInternal() {
        Reservation r = new Reservation(companyTag, customerMail, fromDate, toDate);
        Vehicles v = new Vehicles();
        v.setId(vId);
        r.setVehicles(v);
        return r;
    }
    
}
