package com.rmit.sepy.fri1.spring.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;
import java.sql.Time;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    /* bookingID formula
       e.g. "2208202"
       first 3 letters of bookingName i.e. scuba -> scu
       date as integers i.e. 22/08/2020 -> 220820
       add booking count i.e. 3rd booking add 2 to id
     */
    private Integer bookingId;
    private String bookingName;
    private String workerName;
    private String location;

    private Date date;
    private Time startTime;
    private Time endTime;

    public Booking() {

    }

    public Booking(Integer bookingId, String bookingName, String workerName) {
        this.bookingId = bookingId;
        this.bookingName = bookingName;
        this.workerName = workerName;
    }


    public Integer getId() {return bookingId; }
    public void setId(Integer bookingId) { this.bookingId=bookingId; }

    public String getName() {return bookingName; }
    public void setId(String bookingName) { this.bookingName=bookingName; }

    public String getWorkerName() {return workerName; }
    public void setWorkerName(String workerName) { this.workerName=workerName; }

    public String getLocation() {return location; }
    public void setlocation(String location) { this.location=location; }

    public Date getDate() {return date; }
    public void setDate(Date date) { this.date=date; }

    public Time getStartTime() {return startTime; }
    public void setStartTime(Time startTime) { this.startTime=startTime; }

    public Time getEndTime() {return endTime; }
    public void setEndTime(Time endTime) { this.endTime=endTime; }

}
