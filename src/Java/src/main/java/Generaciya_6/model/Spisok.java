package Generaciya_6.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Generaciya_6.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Список
 */
@Entity(name = "IISGeneraciya_6Список")
@Table(schema = "public", name = "Список")
public class Spisok {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @OneToMany(mappedBy = "spisok", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Anketirovanie> anketirovanies;


    public Spisok() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}