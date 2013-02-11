CREATE TRIGGER Gasto_bi1 BEFORE INSERT ON Gasto
  FOR EACH ROW BEGIN
    update Concepto set Acumulado=Acumulado+new.Valor where Id=new.IdConcepto;
    update Fuente set Salidas=Salidas+new.Valor where Id=new.IdFuente;
  END
