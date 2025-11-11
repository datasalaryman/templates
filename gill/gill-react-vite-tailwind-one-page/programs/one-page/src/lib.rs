use anchor_lang::prelude::*;

declare_id!("5DJmVhdV8Sx98ZK2KKrgT5DGzHdc8w68Ch9fUqbK5mDb");

#[program]
pub mod one_page {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
