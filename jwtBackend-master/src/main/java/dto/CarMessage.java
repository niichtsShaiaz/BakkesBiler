/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dto;

import entity.Vehicles;

/**
 *
 * @author Jbakke
 */
public class CarMessage implements JSONMessage<Vehicles>{

    @Override
    public Vehicles toInternal() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
