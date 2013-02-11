CREATE TRIGGER Gasto_bu1 BEFORE UPDATE ON Gasto
  FOR EACH ROW BEGIN
    update Concepto set Acumulado=Acumulado-old.Valor where Id=old.IdConcepto;
    update Fuente set Salidas=Salidas-old.Valor where Id=old.IdFuente;
    update Concepto set Acumulado=Acumulado+new.Valor where Id=new.IdConcepto;
    update Fuente set Salidas=Salidas+new.Valor where Id=new.IdFuente;
  END
