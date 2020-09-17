package com.rmit.sepy.fri1.spring.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;
import java.sql.Time;
import javax.validation.constraints.NotBlank;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import javax.persistence.*;

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
    @Column(name = "id")
    @NotBlank(message="id is required")
    private Integer bookingId;
    @NotBlank(message="name is required")
    private String bookingName;

    @NotBlank(message="worker name is required")
    private String workerName;
    @NotBlank(message="location is required")
    private String location;
    @Column(name="startDate")
    private Date date;
   @JsonFormat(pattern="yyyy-MM-dd HH:mm")
    private int startTime;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm")
    private int endTime;

    public Booking() {

    }


    public Integer getId() {return bookingId; }
    public void setId(Integer bookingId) { this.bookingId=bookingId; }

    public String getBookingName() {return bookingName; }
    public void setBookingName(String bookingName) { this.bookingName=bookingName; }

    public String getWorkerName() {return workerName; }
    public void setWorkerName(String workerName) { this.workerName=workerName; }

    public String getLocation() {return location; }
    public void setlocation(String location) { this.location=location; }

    public Date getDate() {return date; }
    public void setDate(Date date) { this.date=date; }

    public int getStartTime() {return startTime; }
    public void setStartTime(int startTime) { this.startTime=startTime; }

    public int getEndTime() {return endTime; }
    public void setEndTime(int endTime) { this.endTime=endTime; }

}
