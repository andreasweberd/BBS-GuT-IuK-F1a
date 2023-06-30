package iuk.javabackend.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "pizza")
public class Pizza {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private int id;

    private String name;
    private float preisklein;
    private float preisgross;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "zutaten")
    private List<Pizzazutaten> zutaten = new ArrayList<>();

    public Pizza() {
    }

    public Pizza(String name, float preisKlein, float preisGross) {
        this.name = name;
        this.preisklein = preisKlein;
        this.preisgross = preisGross;
    }

    /**
     * Fügt der Pizza eine Verbindung zu einer Zutat hinzu.
     * @return Die aktualisierte Pizza
     * */
    public Pizza addZutat(Zutaten zutaten) {
        this.getZutaten().add(new Pizzazutaten(this, zutaten));
        return this;
    }
}