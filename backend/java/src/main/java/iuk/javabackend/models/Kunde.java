package iuk.javabackend.models;

import jakarta.persistence.*;

@Entity
public class Kunde {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "Vorname", nullable = false)
    private String Vorname;

    @Column(name = "Nachname", nullable = false)
    private String Nachname;

    @Column(name = "Geburtsdatum", nullable = false)
    private String Geburtsdatum;

    @Column(name = "Telefonnummer", nullable = false)
    private Long Telefonnummer;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getVorname() {
        return Vorname;
    }

    public void setVorname(String vorname) {
        Vorname = vorname;
    }

    public String getNachname() {
        return Nachname;
    }

    public void setNachname(String nachname) {
        Nachname = nachname;
    }

    public String getGeburtsdatum() {
        return Geburtsdatum;
    }

    public void setGeburtsdatum(String geburtsdatum) {
        Geburtsdatum = geburtsdatum;
    }

    public Long getTelefonnummer() {
        return Telefonnummer;
    }

    public void setTelefonnummer(Long telefonnummer) {
        Telefonnummer = telefonnummer;
    }
}
