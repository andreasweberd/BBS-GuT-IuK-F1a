package iuk.javabackend.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name = "pizzazutaten")
public class Pizzazutaten {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private int id;

    @ManyToOne(optional = false)
    @JoinColumn(nullable = false, name = "pizza")
    private Pizza pizza;

    @ManyToOne(optional = false)
    @JoinColumn(nullable = false, name = "zutaten")
    private Zutaten zutaten;

    public Pizzazutaten() {
    }

    public Pizzazutaten(Pizza pizza, Zutaten zutaten) {
        this.pizza = pizza;
        this.zutaten = zutaten;
    }
}