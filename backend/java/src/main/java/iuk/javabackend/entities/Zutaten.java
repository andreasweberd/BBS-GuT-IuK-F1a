package iuk.javabackend.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Setter
@Getter
@Table(name = "zutaten")
public class Zutaten {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private int id;

    private String name;
    private double preis;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "zutaten")
    private List<Pizzazutaten> pizza;

    public Zutaten() {
    }

    public Zutaten(String name, double preis) {
        this.name = name;
        this.preis = preis;
    }
}